# 👨‍💻 Dev Job Tracker

A **job application tracker built specifically for developers**, designed to organize tech job applications by **stack**, **seniority**, and **real hiring stages used in software engineering processes**.

The goal is to replace generic spreadsheets with a tool built **by developers, for developers**.

---

## 🎯 Project Goal

This project was created with a focus on:

* Professional portfolio
* Fullstack skill demonstration
* Product thinking
* Real-world architecture used in modern applications

---

## 🧠 Problem

Developers applying to multiple jobs often struggle to keep track of:

* Where they already applied
* Which hiring stage they are in
* Which tech stacks generate more responses
* Coding challenges, repositories, and feedback

This usually ends up in messy spreadsheets or scattered notes.

---

## 💡 Solution

**Dev Job Tracker** allows developers to:

* Register and manage tech job applications
* Track each step of the technical hiring process
* Store technical details related to each role
* Analyze patterns and metrics during the job search

---

## 👤 Target Audience

* Frontend, Backend, and Fullstack Developers
* Junior, Mid-level, and Senior engineers
* Developers actively searching for tech jobs

---

## 🧱 Features (MVP)

### Authentication

* Sign in with **GitHub**
* Sign in with **Google**

### Job Applications

* Company
* Role (Frontend / Backend / Fullstack)
* Seniority (Junior / Mid / Senior)
* Main tech stack (React, Node, Java, etc)
* Contract type (CLT / PJ)
* Work mode (Remote / Hybrid / On-site)
* Job posting link
* Salary range (optional)
* Technical notes

### Application Status (Tech-oriented)

* Applied
* Recruiter Screen
* Tech Interview
* Coding Challenge
* System Design
* Offer
* Rejected

### General Capabilities

* Create, update, and delete job applications
* Update application status
* Filter jobs by status, stack, and seniority

---

## 🔌 API Routes (Express)

### Auth

* **GET** `/auth/me` → Returns the authenticated user

### Jobs

* **GET** `/jobs` → List all jobs for the authenticated user
* **POST** `/jobs` → Create a new job application
* **GET** `/jobs/:id` → Get job application details
* **PUT** `/jobs/:id` → Update a job application
* **DELETE** `/jobs/:id` → Delete a job application

### Status

* **PATCH** `/jobs/:id/status` → Update job application status

### Dashboard

* **GET** `/dashboard/summary` → General metrics (total, by status, by stack)

---

## 📊 Dashboard (Initial)

* Total applications
* Applications by status
* Applications by tech stack

---

## 🚀 Roadmap

* Status change history (timeline)
* Follow-up reminders
* Coding challenge organization (links & repositories)
* Advanced metrics by stack and seniority
* Follow-up message templates
* AI-powered insights (mock)

---

## 🧰 Tech Stack

### Frontend

* Next.js (App Router)
* TypeScript
* Tailwind CSS
* ShadCN UI
* NextAuth (Auth.js)

### Backend

* Node.js
* Express
* TypeScript

### Database

* PostgreSQL
* Prisma ORM (centralized schema at project root)

### Infrastructure

* Docker
* Docker Compose

---

## 🏗️ Architecture

* Monorepo structure
* Decoupled frontend and backend
* Shared Prisma schema at the root
* API protected via JWT

---

## 🗣️ Quick Pitch

> A job tracker built for developers, considering tech stack, seniority, and real technical hiring stages.

---

## 📌 Project Status

🚧 In development
