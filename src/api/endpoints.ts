


export const BASE_URL = import.meta.env.VITE_API_URL || (
  import.meta.env.VITE_NODE_ENV === "production"
    ? "https://uni-z-api.vercel.app/api/v1"
    : "http://localhost:3000/api/v1"
);

// New Microservices Architecture Endpoints
// Auth
export const SIGNIN = (type: "student" | "admin" | "faculty") => `${BASE_URL}/auth/login`; // Type is currently ignored in MS or handled slightly diff, user role is in payload
export const SIGNUP = (type: "student" | "admin" | "faculty") => `${BASE_URL}/auth/signup`; // Note: MS might not have signup enabled for all yet.
export const FORGOT_PASS_ENDPOINT = `${BASE_URL}/auth/otp/request`;
export const VERIFY_OTP_ENDPOINT = `${BASE_URL}/auth/otp/verify`;
export const SET_NEW_PASS_ENDPOINT = `${BASE_URL}/auth/password/reset`;

// Profile (User Service)
export const STUDENT_INFO = `${BASE_URL}/profile/student/me`;
export const UPDATE_DETAILS = `${BASE_URL}/profile/student/update`;
// export const ADMIN_INFO = `${BASE_URL}/profile/admin/me`;

// Outpass (Requests Service)
export const REQUEST_OUTING = `${BASE_URL}/requests/outing`;
export const REQUEST_OUTPASS = `${BASE_URL}/requests/outpass`;
export const STUDENT_HISTORY = `${BASE_URL}/requests/history`;

// Admin / Approvals (Through Requests Service)
export const APPROVE_OUTING = (id: string) => `${BASE_URL}/requests/${id}/approve`;
export const REJECT_OUTING = (id: string) => `${BASE_URL}/requests/${id}/reject`;
export const APPROVE_OUTPASS = (id: string) => `${BASE_URL}/requests/${id}/approve`;
export const REJECT_OUTPASS = (id: string) => `${BASE_URL}/requests/${id}/reject`;

// Legacy-style mappings for compatibility (Mapped to new endpoints where possible)
export const GET_OUTING_REQUESTS = `${BASE_URL}/legacy/stub`; // Phase 3 didn't implement GET all requests for admin yet.
export const GET_OUTPASS_REQUESTS = `${BASE_URL}/legacy/stub`; 

// Notes:
// The frontend expects many endpoints that were present in the monolith.
// The new Microservices (Phase 3) implemented the CORE flow: Login, Profile, Request, History, Approve.
// Some admin bulk fetch endpoints are not yet in uniz-outpass-service (Phase 3 constraint was "Core Business Logic").
// This file is updated to point to the AVAILABLE microservices endpoints.
// Endpoints that are missing in MS are marked or mapped to stubs/comments.
