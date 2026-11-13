export const fetchExternalDeadlines = async () => {
    return new Promise((resolve, reject) => {
        fetch("https://jsonplaceholder.typicode.com/todos?_limit=3")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Gagal mengambil data dari External API!");
                }
                return response.json();
            })
            .then((data) => {
                const formattedTasks = data.map((item) => ({
                    id: item.id,
                    subject: "External API",
                    title: item.title,
                    deadline: "30 November 2026",
                }));
                resolve(formattedTasks);
            })
            .catch((error) => {
                reject(error);
            });
    });
};