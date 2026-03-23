import axios from 'axios';
import { ApiResponse, Character } from './types';

const BASE_URL = 'https://rickandmortyapi.com/api';

export const getCharacters = async (
  page: number = 1,
  filters: {
    name?: string;
    status?: string;   // 'alive' | 'dead' | 'unknown'
    gender?: string;   // 'male' | 'female' | 'genderless' | 'unknown'
  } = {}
): Promise<ApiResponse> => {
  try {
    const params: Record<string, any> = { page };

    
    if (filters.name?.trim()) {
      params.name = filters.name.trim();
    }
    if (filters.status) {
      params.status = filters.status.toLowerCase();
    }
    if (filters.gender) {
      params.gender = filters.gender.toLowerCase();
    }

    const response = await axios.get<ApiResponse>(`${BASE_URL}/character`, { params });

    return response.data;
  } catch (error: any) {
    
    if (error.response) {
      
      throw new Error(`Error API: ${error.response.status} - ${error.response.data.error || 'Неизвестная ошибка'}`);
    } else if (error.request) {
    
      throw new Error('No internet connection. Please check internet connection.');
    else {
      
      throw new Error(`Error in type ${error.message}`);
    }
  }
};

export const getCharacterById = async (id: number): Promise<Character> => {
  try {
    const response = await axios.get<Character>(`${BASE_URL}/character/${id}`);
    return response.data;
  } catch (error: any) {
    if (error.response?.status === 404) {
      throw new Error('Character not found.');
    }
    throw new Error(`Error in character load: ${error.message}`);
  }
};
