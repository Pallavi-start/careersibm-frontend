
const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

if (!API_BASE) {
  throw new Error("NEXT_PUBLIC_API_BASE is not defined");
}

export const API = {
  applyJob: `${API_BASE}/api/applications/apply`,
  addJob: `${API_BASE}/api/jobs`,

  signup: `${API_BASE}/api/signup-user`,
  verifyOtpUser: `${API_BASE}/api/verify-otp-user`,
  loginUser: `${API_BASE}/api/login-user`,
  updateProfile: `${API_BASE}/api/update-profile`,
  getProfile: `${API_BASE}/api/get-profile`,

    
};

export default API_BASE;