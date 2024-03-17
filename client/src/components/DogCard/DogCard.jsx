import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function DogCard( {id, name, image, temperament, temperaments}) {
    if (!temperaments) {
        return (
            <Fragment>
                <div>
                    <Link>
                        <div>
                            <h4>{name}</h4>
                        </div>
                        <div>
                            <div>
                                {temperament ? (
                                    <h5>{temperament}</h5>
                                ) : (
                                    <br />
                                )}
                            </div>
                            <div>
                                <img src={image} alt={`A dog wich is ${temperament}`} height="140px" />
                            </div>
                        </div>
                    </Link>
                </div>
            </Fragment>
        );
    } else {
        return (
            <Fragment>
                <div>
                    <Link>
                    <div>
                        <h4>{name}</h4>
                    </div>
                    <div>
                        <div>
                            {temperaments ? (
                                <h5>
                                    {temperaments.map((temp) => `${temp.name}`).join(', ')}
                                </h5>
                            ) : (
                                <br />
                            )}
                        </div>
                        <div>
                            <img src={image} alt={'A dog'} height="140px" />
                        </div>
                    </div>
                    </Link>
                </div>
            </Fragment>
        )
    }
}