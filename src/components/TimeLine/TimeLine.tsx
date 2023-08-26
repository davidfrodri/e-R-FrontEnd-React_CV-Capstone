import { type CSSProperties } from 'react';
import { useSelector } from 'react-redux';
import ClipLoader from "react-spinners/ClipLoader";

import {  type RootState } from '../../store/store';
import useEducationData from '../../hooks/fetch/useEducationData';

import Info from "../Info/Info"

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};

const TimeLine = (): JSX.Element => {
  const { education, error } = useEducationData();
  const isLoadingEducation: boolean = useSelector((state: RootState) => state.loadingEducation.isLoadingEducation);
  

  return (
    <section className="timeline" id="education">
      <h2 className="timeline__title">Education</h2>
      {isLoadingEducation ? (
        <ClipLoader
          color="#26c17e"
          loading={isLoadingEducation}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
          cssOverride={override}
        />
      ) : (error != null) ? <div className="error-message">{error}</div> : (
        <ul className="timeline__list">
          {education.map((item, index) => (
            <li key={index}>
              <div className="timeline__date">{item.date}</div>
              <div className="timeline__content">
                <div className="timeline__info">
                  <Info title={item.title} text={item.description}/>
                </div>
              </div>
            </li>
          ))}
        </ul>) }
    </section>
  )
}

export default TimeLine