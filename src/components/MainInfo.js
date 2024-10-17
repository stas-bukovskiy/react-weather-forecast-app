import React from "react";

export function MainInfo({description, temp, icon}) {
    return (
        <div className="d-flex justify-content-between bg-body-transparent p-5 rounded-4">
            <div className="col-md-9 d-flex flex-column">
                <div>
                    <p className="h2">Kyiv, Ukraine</p>
                    <p className="text-muted h5">{description}</p>
                </div>
                <div className="d-flex align-items-end h-100"></div>
                <p className="h1 fw-bold">{temp}°</p>
            </div>

            <div className="col-md-3 align-content-center">
                <img src={'/' + icon + '.svg'}
                     alt="Logo" className="w-100"/>
            </div>
        </div>
    )
}