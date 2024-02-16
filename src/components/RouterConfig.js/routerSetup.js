import React from 'react'
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, } from "react-router-dom";
import App from '../../App';
import Expertise from '../ExpertiseSec/Expertise';
import Products from '../Products/Products';
import Project from '../ProjectSec/Project';
import Contact from '../ContactSec/Contact';
import Career from '../Creeer/Career';
import ExpertiseInner from '../ExpertiseInner/ExpertiseInner';
import AboutSec from '../AboutSec/AboutSec';
import OperationInr from '../OperationInner/OperationInr';
import ChillerMain from '../ChillerContInners/ChillerMain';
import RentalMain from '../User&RentalInner/RentalMain';
import ChillerPlantMain from '../ChillerPLant/ChillerPlantMain';
import StellinnerMaib from '../Stell_Struc_inner/StellinnerMaib';
import GlobalMain from '../Products/ProductInnerSec/Global/GlobalMain';
import AbsorbChiler from '../Products/ProductInnerSec/Global/AbsorbChillers'
import Zia_Project from '../ProjectSec/Project_Inner/Zia_Project';
import Nation_Porject from '../ProjectSec/Nation_Porject';
import Overseas_Projet from '../ProjectSec/Overseas_Projet';
import ClientProject from '../ProjectSec/ClientProject';
import Refrig from '../Products/ProductInnerSec/Refrig';
import CoolingTower from '../Products/ProductInnerSec/CoolingTower';
import AHUS from '../Products/ProductInnerSec/AHUS.js';
import Spare_Parts from '../Products/ProductInnerSec/Spare_Parts.js';
import Home from '../Home.js';
import DevisPLANT from '../ProjectSec/Project_Inner/DevisPLANT.js';
import Pso from '../ProjectSec/Project_Inner/Pso.js';
import Tufail from '../ProjectSec/Project_Inner/Tufai.js';
import Pharmna from '../../components/ProjectSec/Project_Inner/UgraitPharma.js'
import UgraitPharma from '../ProjectSec/Project_Inner/UgraitPharma.js';
import UnionPaper from '../ProjectSec/Project_Inner/UnionPaper.js';
import Kabul from '../ProjectSec/Project_Inner/Kabul.js';
import Zarghun from '../ProjectSec/Project_Inner/Zarghun.js';
import Stocks from '../Products/ProductInnerSec/AvailableStocks/Stocks.js';
import Desboard from '../../Admin/Desboard';
import Login from '../../Admin/Login';
const routerSetup = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />,
        },
        {
            path: "/Availabale_Stocks",
            element: <Stocks />,
        },
        {
            path: "/Home",
            element: <App />,
        },
        {
            path: "/About",
            element: <AboutSec />,
        },
        {
            path: "/Expertise",
            element: <Expertise />,
        },
        {
            path: "/Products",
            element: <Products />,
        },
        {
            path: "/Projects",
            element: <Project />,
        },
        {
            path: "/Contact",
            element: <Contact />,
        },
        {
            path: "/Career",
            element: <Career />,
        },
        {
            path: "/ProceesCoolingSol",
            element: <ExpertiseInner />,
        },
        {
            path: "/Operation-Maintenance",
            element: < OperationInr />,
        },
        {
            path: "/Chillars-Controls",
            element: < ChillerMain />,
        },
        {
            path: "/Rental&Equipment",
            element: < RentalMain />,
        }
        , {
            path: "//toChillerPalnt",
            element: <ChillerPlantMain />
        },
        {
            path: "/Stell&Structure",
            element: <StellinnerMaib />

        },
        {
            path: '/GlobalNew&UsedEquipment',
            element: <GlobalMain />

        },
        {
            path: '/Zia_Mohd_project',
            element: <Zia_Project />

        }
        // PROJECTS
        ,
        {
            path: '/Projects/NationWide',
            element: <Nation_Porject />

        },
        {
            path: '/Projects/OverseasePorject',
            element: <Overseas_Projet />

        }
        , {
            path: '/Projects/ClientProject',
            element: <ClientProject />

        },
        {
            path: '/AbsorbitonChiller',
            element: <AbsorbChiler />

        },
        {
            path: '/IndustrialRefrigeration',
            element: <Refrig />

        },
        {
            path: '/CoolingSolutions',
            element: <CoolingTower />

        }
        , {
            path: '/AirUnit',
            element: <AHUS />

        },
        {
            path: '/SparePARTS',
            element: <Spare_Parts />

        },
        {
            path: '/Projects/DevisPlant',
            element: <DevisPLANT />

        },
        {
            path: '/Projects/PSO',
            element: <Pso />

        },
        {
            path: '/Projects/NationWide/TufailCehmiacls',
            element: <Tufail />

        },
        {
            path: '/Projects/NationWide/Zia Mohyeddin Theatre',
            element: <Zia_Project />

        },
        {
            path: '/Projects/Oversies/UgraitPharma',
            element: <Pharmna />

        },
        {
            path: '/Projects/Oversies/Ugarit',
            element: <UgraitPharma />

        },
        {
            path: '/Projects/Oversies/UnionPaper',

            element: <UnionPaper />
        },
        {
            path: '/Projects/Oversies/Kabul',

            element: <Kabul />
        },
        {
            path: '/Projects/Oversies/Zarghun',
            element: <Zarghun />
        },
        {
            path: '/dashboard/*',
            element: <Desboard />
        },
        {
            path: '/Login',
            element: <Login />
        },
    ]
)
export default routerSetup;
