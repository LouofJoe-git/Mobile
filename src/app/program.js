import deadlineData from './response.json';

export const getAlldeadlines = () => {
    return deadlineData;
};

export const getDeadlinesBySubject = (subjectName) => {
    return deadlineData.filter(task => task.subject.toLowerCase() === subjectName.toLowerCase());
};

export const getTaskCount = () => {
    return deadlineData.length;
};