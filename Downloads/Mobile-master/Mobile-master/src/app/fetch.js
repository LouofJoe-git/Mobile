import deadlineData from './response.json';

export const fetchAllDeadlines = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve(deadlineData);
            } catch (error) {
                console.error("Gagal mengambil data tugas:", error);
                reject(error);
            }
        }, 500);
    });
};

export const createNewTask = async (newTask) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                if (!newTask) {
                    throw new Error("Data tugas tidak boleh kosong");
                }

                const taskWithId = {
                    id: Date.now(),
                    ...newTask,
                };

                resolve(taskWithId);
            } catch (error) {
                console.error("Gagal membuat tugas:", error);
                reject(error);
            }
        }, 500);
    });
};