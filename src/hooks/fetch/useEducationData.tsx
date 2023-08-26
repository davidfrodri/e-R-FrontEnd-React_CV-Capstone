import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchEducation } from '../../services/services';
import { setLoadingEducation, clearLoadingEducation } from '../../store/loadingSliceEducation';
import { type EducationData } from '../../types';
import { type AppDispatch } from '../../store/store';

const useEducationData = (): { education: EducationData[]; isLoading: boolean; error: string | null } => {
  const dispatch: AppDispatch = useDispatch();
  const [education, setEducation] = useState<EducationData[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      setLoading(true);
      dispatch(setLoadingEducation());
      
      try {
        const data = await fetchEducation();
        setEducation(data);
        setError(null);
      } catch (error) {
        console.error('Error fetching education data:', error);
        setError('Something went wrong; please review your server connection!');
      } finally {
        setLoading(false);
        dispatch(clearLoadingEducation());
      }
    };

    void fetchData();
  }, [dispatch]);

  return { education, isLoading, error };
};

export default useEducationData;