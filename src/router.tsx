import { createBrowserRouter } from "react-router-dom";
import PanelLayout from "./panel/view/PanelLayout";
import GenerateSqlLayout from "./GenerateSql/views/GenerateSqlLayout";
import TablasSqlLayout from "./TablasSQL/views/TablasSqlLayout";
import PlantillasSqlLayout from "./PlantilllasSQL/views/PlantillasSqlLayout";
import FormateadorSqlLayout from "./Formateador/views/FormateadorSqlLayout";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<PanelLayout/>,
        children:[
            {
                path:'/',
                element:<FormateadorSqlLayout/>
            },
            {
                path:'/generadorsql',
                element:<GenerateSqlLayout/>
            },
            {
                path:'/configuracion-tablas',
                element:<TablasSqlLayout/>
            },
            {
                path:'/plantillas',
                element:<PlantillasSqlLayout/>
            }
        ]
    }
]);