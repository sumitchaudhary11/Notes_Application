import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api'
});

export const createGroup = (group) => api.post('/groups', group);
export const getGroups = () => api.get('/groups');// src/services/api.js
export const createNote = (note) => api.post('/notes', note);
export const getNotesByGroup = (groupId) => api.get(`/notes/${groupId}`);


export const checkGroupNameExists = (name) => api.get('/groups/check', { params: { name } }); // checks group name exists
