# News Portal Website

## Overview

The News Portal Website is a full-stack application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It provides a platform for users to read and write articles, with features such as user authentication, premium content, subscription plans, and an admin dashboard for managing users and articles.

## Features

### User Authentication

- User Registration and Login: Users can create accounts and log in securely.
- Authentication Middleware: Ensures secure access to protected routes.

### Article Management

- Read Articles: Users can browse and read articles on the platform.
- Write Articles: Authenticated users can submit articles for approval.
- Article Approval: Admins have the authority to approve or decline submitted articles.
- User Article Management: Users can manage their submitted articles, including updating and deleting.

### Premium Content and Subscriptions

- Premium Articles: Certain articles are marked as premium content.
- Subscription Plans: Users can subscribe to premium content through subscription plans.
- Stripe Integration: Stripe payment method is integrated for handling subscription payments.

### Admin Dashboard

- User Management: Admins can manage users, approve or decline articles, and grant admin roles.
- Article Management: Admins have control over the articles submitted by users.
- Auto-Scrolling System: The application features an auto-scrolling system for a seamless user experience.

### Email Integration

- Email.js Integration: Integrated Email.js for sending transactional emails.
