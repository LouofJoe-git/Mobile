import deadlineData from './response.json';

export const fetchAllDeadlines = async () => {
    try {
        await new Promise((resolve) => setTimeout(resolve, 500));

        return deadlineData;
    } catch (error) {
        console.error("Gagal menambil data tugas:", error);
        throw error;
    }
};

export const createNewTask = async (newTask) => {
    try {
        await new Promise((resolve) => setTimeout(resolve, 500));

        const taskWithId = {
            id: Date.now(),
            ...newTask,
        };

        return taskWithId;
    } catch (error) {
        console.error("Gagal membuat tugas:", error);
        throw error;
    }
};
