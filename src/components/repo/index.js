import React from "react";
import  LanguageColors from"language-colors"
const Repo = ({ full_name, topics, watchers, language='' }) => {
    const color = LanguageColors[language?.toLowerCase()]?.hex() ? LanguageColors[language?.toLowerCase()]?.hex() : 'black'
    const formatter = Intl.NumberFormat('en', { notation: 'compact' });
    const formatNumber = watchers ? formatter.format(watchers) : null
    return (
        <div className='container-fluid d-flex border-top mt-2 pt-2'>
            <div className="row">
                <div className="col">
                    <button type="button" className="btn btn-link">{full_name}</button>
                </div>
                <div className="row">
                    <div className="col">
                        {
                            topics.map((topic, index) => <span key={index} className="badge bg-secondary mx-2">{topic}</span>)
                        }
                    </div>
                </div>
                <div className="row">
                    <div className="col px-4 pt-2">

                        {
                            formatNumber &&
                            <>
                                <i className="bi bi-star"></i>
                                <span className="mx-2">{formatter.format(watchers)}</span>
                            </>
                        }

                        <span className="fw-bolder" style={{color}}>{language}</span>

                    </div>
                </div>
            </div>
        </div>

    )
};
export default Repo;