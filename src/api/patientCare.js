const BASE = (
  import.meta.env.VITE_API_URL ||
  "http://localhost:5000/api"
).replace(/\/$/, "");

/* =========================================
   COMMON API REQUEST
========================================= */

async function request(
  path,
  { method = "GET", body } = {}
) {
  const headers = {};

  // Do not manually set Content-Type for FormData.
  // Browser must generate its multipart boundary.
  if (body && !(body instanceof FormData)) {
    headers["Content-Type"] = "application/json";
  }

  const response = await fetch(
    `${BASE}/patient-care${path}`,
    {
      method,
      headers,

      // Browser automatically sends the HttpOnly cookie.
      credentials: "include",

      body:
        body instanceof FormData
          ? body
          : body
            ? JSON.stringify(body)
            : undefined,

      cache: "no-store",
    }
  );

  if (!response.ok) {
    const errorData = await response
      .json()
      .catch(() => ({}));

    throw new Error(
      errorData.message ||
      errorData.error ||
      `Request failed (${response.status})`
    );
  }

  return response.json();
}

/* =========================================
   PATIENT CARE API
========================================= */

export const patientCare = {
  me: () => request("/me"),

  save: (section, data) =>
    request(`/me/${section}`, {
      method: "PATCH",
      body: data,
    }),

  upload: (file, sectionId, category) => {
    const body = new FormData();

    body.append("file", file);
    body.append("sectionId", sectionId);
    body.append("category", category);

    return request("/me/documents", {
      method: "POST",
      body,
    });
  },

  remove: (id) =>
    request(`/me/documents/${id}`, {
      method: "DELETE",
    }),

  /* =====================================
     PROFILE PHOTO
  ===================================== */

  async getDocumentBlob(id) {
    const response = await fetch(
      `${BASE}/patient-care/me/documents/${id}`,
      {
        credentials: "include",
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error(
        "Unable to load profile photo"
      );
    }

    return response.blob();
  },

  /* =====================================
     DOCUMENT DOWNLOAD
  ===================================== */

  async download(id, name) {
    const response = await fetch(
      `${BASE}/patient-care/me/documents/${id}`,
      {
        credentials: "include",
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Download failed");
    }

    const blob = await response.blob();

    const url = URL.createObjectURL(blob);

    const anchor = document.createElement("a");

    anchor.href = url;
    anchor.download = name || "document";

    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();

    setTimeout(() => {
      URL.revokeObjectURL(url);
    }, 1000);
  },
};



// import { TOKEN_KEY } from "../utils/auth";
// const BASE = (
//   import.meta.env.VITE_API_URL || "http://localhost:5000/api"
// ).replace(/\/$/, "");

// async function request(path, { method = "GET", body } = {}) {
//   const headers = {
//     Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY) || ""}`,
//   };
//   if (body && !(body instanceof FormData))
//     headers["Content-Type"] = "application/json";
//   const res = await fetch(`${BASE}/patient-care${path}`, {
//     method,
//     headers,
//     body:
//       body instanceof FormData ? body : body ? JSON.stringify(body) : undefined,
//     cache: "no-store",
//   });
//   if (!res.ok)
//     throw new Error(
//       (await res.json().catch(() => ({}))).message ||
//         `Request failed (${res.status})`,
//     );
//   return res.json();
// }
// export const patientCare = {
//   me: () => request("/me"),
//   save: (section, data) =>
//     request(`/me/${section}`, { method: "PATCH", body: data }),
//   upload: (file, sectionId, category) => {
//     const body = new FormData();
//     body.append("file", file);
//     body.append("sectionId", sectionId);
//     body.append("category", category);
//     return request("/me/documents", { method: "POST", body });
//   },
//   remove: (id) => request(`/me/documents/${id}`, { method: "DELETE" }),

//   async getDocumentBlob(id) {
//   const response = await fetch(
//     `${BASE}/patient-care/me/documents/${id}`,
//     {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY) || ""}`,
//       },
//       cache: "no-store",
//     }
//   );

//   if (!response.ok) {
//     throw new Error("Unable to load profile photo");
//   }

//   return response.blob();
// },
//   async download(id, name) {
//     const response = await fetch(`${BASE}/patient-care/me/documents/${id}`, {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY) || ""}`,
//       },
//     });
//     if (!response.ok) throw new Error("Download failed");
//     const blob = await response.blob();
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = name || "document";
//     a.click();
//     setTimeout(() => URL.revokeObjectURL(url), 1000);
//   },
// };
