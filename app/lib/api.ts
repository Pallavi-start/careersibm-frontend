const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

if (!API_BASE) {
  throw new Error("NEXT_PUBLIC_API_BASE is not defined");
}

export const API = {
  applyJob: `${API_BASE}/api/applications/apply`,
  addJob: `${API_BASE}/api/jobs`,
};

export default API_BASE;