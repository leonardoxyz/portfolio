import React from 'react';

const Backend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Backend Developer</h3>
            <span className="skills__subtitle">it's my challenge</span>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">Angular 6</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">C#</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>

                    <div className="skills__data">
                    <i class='bx bxl-nodejs'></i>
                        <div>
                            <h3 className="skills__name">NodeJS</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>

                    <div className="skills__data">
                    <i class='bx bxl-mongodb' ></i>
                        <div>
                            <h3 className="skills__name">MongoDB</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Backend;