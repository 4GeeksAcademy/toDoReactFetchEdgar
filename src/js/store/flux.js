const getState = ({ getStore, getActions, setStore }) => {
    return {
      store: {
      },
      actions: {
        //Fetches and Deletes
  
        fetchTasks: async () => {
          try {
            const response = await fetch(`${process.env.BACKEND_URL}/api/tasks`);
            if (!response.ok) throw new Error("Error fetching tasks");
  
            const data = await response.json();
            return data;
          } catch (err) {
            console.error(err);
            return [];
          }
        },
  
        updateTasks: async (tasks) => {
          try {
            const response = await fetch(`${process.env.BACKEND_URL}/api/tasks`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ tasks }),
            });
  
            if (!response.ok) throw new Error("Error updating tasks");
  
            const data = await response.json();
            return data;
          } catch (err) {
            console.error(err);
            return [];
          }
        },
  
        deleteAllTasks: async () => {
          try {
            const response = await fetch(`${process.env.BACKEND_URL}/api/tasks`, {
              method: 'DELETE',
            });
  
            if (!response.ok) throw new Error("Error deleting tasks");
  
            const data = await response.json();
            return data;
          } catch (err) {
            console.error(err);
            return [];
          }
        },
  
        // ...
      }
    };
  };
  
  export default getState;
  