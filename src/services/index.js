const apiUrl = import.meta.env.VITE_API_URL;

//          register a user
export const registerUser = (userData) => {
    return fetch(`${apiUrl}api/auth/register`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    }) 
};

//          login a user
export const loginUser = (userData) => {
    return fetch(`${apiUrl}api/auth/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
};

//          update the user
export const updateUser = (userData) => {
    return fetch(`${apiUrl}api/auth/update`, {
        method: "PUT",
        headers: {
            'Content-Type': 'appliction/json'
        },
        body: JSON.stringify(userData)
    })
};

//          Fetch User Dashboard Data
export const fetchDashboardData = (userId) => {
    return fetch(`${apiUrl}dashboard/${userId}`, {
        method: "GET"
    })
};
  
//          Create Folder API
export const createFolder = (userId, folderName) => {
    return fetch(`${apiUrl}folder`, {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({ userId, folderName }),
    })
};
 
//          Create Form API
export const createForm = (userId, formName, folderId = null) => {
    return fetch(`${apiUrl}form`, {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({ userId, formName, folderId }),
    })
};

//          Fetch Form Data for FormBot
export const fetchFormData = (formId) => {
    return fetch(`${apiUrl}form/${formId}`, {
        method: "GET"
    })
};
  
//          Submit Form Responses
export const submitFormResponse = (formId, responses) => {
    return fetch(`${apiUrl}form/response`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({formId, responses})
    }) 
};

//          Fetch Form Analytics
export const fetchFormAnalytics = (formId) => {
    return fetch(`${apiUrl}form/ananlytics/${formId}`, {
        method: "GET"
    })
};
  
// Invite User via Email
export const inviteUser = async (email, accessMode, dashboardId) => {
    return fetch(`${apiUrl}invite`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, accessMode, dashboardId })
    })
};
