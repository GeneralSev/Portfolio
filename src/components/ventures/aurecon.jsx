import React from 'react';

export const aurecon_layout = () => (

    <div className='venture-container'>
        <p>
            While working at at a company called <a className="external-link" href="https://www.aurecongroup.com/" 
            target="_blank" rel="noopener noreferrer">Aurecon</a> I was involved in the <a className="external-link" 
            href="https://bigbuild.vic.gov.au/projects/west-gate-tunnel-project" 
            target="_blank" rel="noopener noreferrer">West Gate Tunnel Project</a> in Melbourne Australia.
        </p>
        <br />
        <p>
            In <a className="external-link" 
            href="https://micromobilityreport.com.au/infrastructure/all-other-infrastructure/over-100-million-of-cycling-infrastructure-commences-construction-in-melbourne/" 
            target="_blank" rel="noopener noreferrer">summary</a>, 
            the West Gate Tunnel Project is a huge multi-billion motorway expansion project involving building twin
            tunnels under the inner western suburb to link the city with the western suburbs. There are a number of above-ground
            link roads constructed as part of the project as well as new cycling infrastructure.
        </p>
        <br />
        <p>
            I assisted with new veloway paths and bridges. Including a veloway that was hung underneath a highway, many km's of
            retaining walls and multiple pedestrian and veloway bridges. My responsibilities was to assist with the engineering, 3D modelling and drawings
            of these structures in Autodesk Revit. Due to my interest in automation I took on the task of automating the placement
            and design of the bridges using Autodesk Dynamo.
        </p>
        <br />
        <p>
            Autodesk Dynamo is an open-source visual programming platform for building design and automation. It's a powerful tool
            that allows architects, engineers, and designers to create custom workflows and automate tasks within Autodesk
            software applications like Revit, AutoCAD, and Civil 3D.
        </p>
        <br />
        <p>
            While I found the drafting side of the work dull, the automation side was incredibly interesting to me, and I happily dove into the world of dynamo.
        </p>
        <br />
        <p>
            Here are a few screeen shots of some of the dynamo scripts I created.
        </p>
        <figure>
            <img className='venture-image'
                src={process.env.PUBLIC_URL + "/images/Dynamo bridge alignment.png"}
                alt="Dynamo bridge alignment"
            />
            <figcaption>Bridge alignment script</figcaption>
        </figure>

        <figure>
            <img className='venture-image'
                src={process.env.PUBLIC_URL + "/images/Dynamo bridge girders.png"} 
                alt="Dynamo bridge girders"
            />
            <figcaption>Bridge girder script</figcaption>
        </figure>

        <figure>
            <img className='venture-image'
                src={process.env.PUBLIC_URL + "/images/Dynamo bridge steelworks.png"}
                alt="Dynamo bridge steelworks"
            />
            <figcaption>Bridge steelworks script</figcaption>
        </figure>

        <figure>
            <img className='venture-image'
                src={process.env.PUBLIC_URL + "/images/Dynamo bridge cladding.png"} 
                alt="Dynamo bridge cladding"
            />
            <figcaption>Bridge cladding script</figcaption>
        </figure>


    </div >
);
