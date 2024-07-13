import { useState } from "react"
import ButtonImage from "../../ComponentsGlobal/ButtonImage"
import { IconData } from "../assets/IconData"

const Aside = () => {
    const [expandMenu,setExpandMenu] = useState(true)
    const [mostrarTexto,setmostrarTexto] = useState(true)
    const mostrartxt = async() => {
        if(mostrarTexto){
            setTimeout(() => {
                setmostrarTexto(!mostrarTexto);
            }, 100);
        }else{
            setTimeout(() => {
                setmostrarTexto(!mostrarTexto);
            }, 250);
        }
         
    }
  return (
    <section className={`border-r transition-all ease-in-out duration-500 ${expandMenu ? ' w-1/6' : ' w-12'} h-full  overflow-auto flex flex-col gap-5  `}>
        {/* menu de lineas */}
        <section className="w-full flex items-center justify-end p-2">
            <button onClick={()=>{setExpandMenu(!expandMenu)
                mostrartxt()
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
                className={`w-6 h-6 text-slate-200 transform transition-transform duration-500 ${expandMenu ? '' : 'rotate-180'}`}>
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z" clipRule="evenodd" />
                </svg>
            </button>

        </section>
        
        <ButtonImage url="/"                text="Formateador SQL" icon={IconData} imagehidden={mostrarTexto}/>
        <ButtonImage url="/generadorsql"    text="Generar SQL" icon={IconData} imagehidden={mostrarTexto}/>
        <ButtonImage url="/configuracion-tablas" text="Tablas" icon={IconData} imagehidden={mostrarTexto}/>
        <ButtonImage url="/plantillas"      text="Plantillas" icon={IconData} imagehidden={mostrarTexto}/>
        {/* <ButtonImage text="" icon={IconData} imagehidden={mostrarTexto}/> */}
        {/* <ButtonImage text="Generar SQL" icon={IconData} imagehidden={mostrarTexto}/> */}

    </section>
  )
}

export default Aside
