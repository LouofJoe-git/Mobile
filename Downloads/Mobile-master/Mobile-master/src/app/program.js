import deadlineData from './response.json';

export const fetchDeadlinesFromAPI = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve(deadlineData);
            } else {
                reject(new Error("Gagal mengambil data dari server!"));
            }
        }, 1000);
    });
};