import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { resend } from "./lib/resend";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post(api.inquiries.create.path, async (req, res) => {
    try {
      const input = api.inquiries.create.input.parse(req.body);
      const inquiry = await storage.createInquiry(input);
      
      // Send email notification
      try {
        await resend.emails.send({
          from: 'onboarding@resend.dev',
          to: 'axearcenas@gmail.com',
          replyTo: input.email,
          subject: `New Inquiry from ${input.name} - ESM`,
          html: `
            <h1>New Event Inquiry</h1>
            <p><strong>Name:</strong> ${input.name}</p>
            <p><strong>Email:</strong> ${input.email}</p>
            <p><strong>Phone:</strong> ${input.phone || 'N/A'}</p>
            <p><strong>Event Date:</strong> ${input.eventDate || 'N/A'}</p>
            <p><strong>Event Type:</strong> ${input.eventType || 'N/A'}</p>
            <p><strong>Service Type:</strong> ${input.serviceType || 'N/A'}</p>
            <p><strong>Message:</strong> ${input.message || 'N/A'}</p>
          `
        });
      } catch (emailError) {
        console.error("Failed to send email:", emailError);
        // We don't fail the request if email fails, as DB record is created
      }

      res.status(201).json(inquiry);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  return httpServer;
}
