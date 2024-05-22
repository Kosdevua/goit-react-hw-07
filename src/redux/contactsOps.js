// Файл для зберігання асинхронних генераторів екшенів.

//Оголоси наступні операції:

// fetchContacts - одержання масиву контактів (метод GET) запитом. Базовий тип екшену це рядок "contacts/fetchAll".
// addContact - додавання нового контакту (метод POST). Базовий тип екшену це рядок "contacts/addContact".
// deleteContact - видалення контакту по ID (метод DELETE). Базовий тип екшену це рядок "contacts/deleteContact".

//Для коректного опрацювання помилки HTTP-запиту в середині операцій, використай конструкцію try...catch, та у блоці catch поверни результат виклику методу thunkAPI.rejectWithValue.

//Обробку усіх трьох екшенів (fulfilled, rejected, pending) та зміну даних у стані Redux зроби у властивості extraReducers слайсу контактів, а от властивість reducers з нього — прибери.

import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchUserById = createAsyncThunk(
  "users/fetchByIdStatus",
  async (userId: number, thunkAPI) => {
    const response = await userAPI.fetchById(userId);
    return response.data;
  }
);
