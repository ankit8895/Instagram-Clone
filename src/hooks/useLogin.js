import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../firebase/firebase';
import useShowToast from './useShowToast';
import { doc, getDoc } from 'firebase/firestore';
import useAuthStore from '../store/authStore';

const useLogin = () => {
  const [signInWithEmailAndPassword, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const showToast = useShowToast();
  const loginUser = useAuthStore((state) => state.login);

  const login = async (inputs) => {
    if (!inputs.email || !inputs.password) {
      showToast('Error', 'Please fill all the fields', 'error');
    }

    try {
      const userCred = await signInWithEmailAndPassword(
        inputs.email,
        inputs.password
      );

      const docRef = doc(firestore, 'users', userCred.user.uid);
      const docSnap = await getDoc(docRef);
      localStorage.setItem('user-info', JSON.stringify(docSnap.data()));
      loginUser(docSnap.data());
    } catch (error) {
      showToast('Error', error.message, 'error');
    }
  };
  return { login, loading, error };
};

export default useLogin;
