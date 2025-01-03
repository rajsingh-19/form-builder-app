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
            'Content-Type': 'application/json',
            'Authorization': `${localStorage.getItem('token')}`
        },
        body: JSON.stringify(userData)
    })
};

//          Fetch User Dashboard Data
export const fetchDashboardData = (userId) => {
    return fetch(`${apiUrl}api/dashboard/${userId}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${localStorage.getItem('token')}`
        }
    })
};

//         Fetch collaborators dashboards data
export const fetchDashboardDatas = (userId) => {
    return fetch(`${apiUrl}api/dashboard/get/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${localStorage.getItem('token')}`,
      },
    });
};

// Create Dashboard API
export const createDashboard = (userId) => {
    return fetch(`${apiUrl}api/dashboard/create`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ userId })
    });
};
  
//          Create Folder API
export const createFolder = ({ folderName, dashboardId }) => {
    return fetch(`${apiUrl}api/folder/${dashboardId}/folder`, {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ folderName }),
    })
};

//          Add form to folder api
export const addFormToFolder = ({ formName, dashboardId, folderId }) => {
    return fetch(`${apiUrl}api/folder/${dashboardId}/folder/${folderId}/form`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ formName })
    })
}

//          Delete folder api
export const deleteFolder = ({ folderId, dashboardId }) => {
    return fetch(`${apiUrl}api/folder/${dashboardId}/folder/${folderId}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${localStorage.getItem('token')}`
        }
    })
}

//          Create Form API
export const createForm = ({ dashboardId, formName }) => {
    return fetch(`${apiUrl}api/form/${dashboardId}/form`, {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `${localStorage.getItem('token')}` 
        },
        body: JSON.stringify({ formName })
    })
};

//          Delete Form API
export const deleteForm = ({ formId, dashboardId }) => {
    return fetch(`${apiUrl}api/form/${formId}`, {
        method: "DELETE",
        headers: {
            'Content-Type': "application/json",
            'Authorization': `${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ dashboardId })
    })
}

//          Fetch Form Data for FormBot
export const fetchFormData = ({ formId, dashboardId, folderId }) => {
    // console.log(dashboardId, formId, folderId);
    return fetch(`${apiUrl}api/form/${dashboardId}/${formId}/${folderId}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${localStorage.getItem('token')}`
        }
    })
};

//          Fetch get users api
export const getUser = (email) => {
    return fetch(`${apiUrl}api/auth/getUser/${email}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
};
  
//          Submit Form Responses
export const submitFormResponse = (formId, responses) => {
    return fetch(`${apiUrl}api/form/response`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({formId, responses})
    }) 
};

//          Share dashboard api
export const shareDashboard = (accessMode, userId, dashboardId) => {
    return fetch(
      `${apiUrl}api/dashboard/shareDashboard/${userId}/${dashboardId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ accessMode }),
      }
    );
  };
  

//          Fetch Form Analytics
export const fetchFormAnalytics = (formId) => {
    return fetch(`${apiUrl}api/form/ananlytics/${formId}`, {
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
