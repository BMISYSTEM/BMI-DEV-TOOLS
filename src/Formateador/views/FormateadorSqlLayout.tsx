import { FormEvent, useState } from "react";
import ButtonAnimation from "../../ComponentsGlobal/ButtonAnimation";
import { IconCopy } from "../assets/IconCopy";
import { IconFormat } from "../assets/IconFormat";
import { toast } from "react-toastify";

const FormateadorSqlLayout = () => {
  const [sql,setSql] = useState('')

  const handleClickSubmit = async (e:FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    const format = async() =>{

      let conselect = '';
      const seletSQL = sql.split('SELECT');
      seletSQL.map((coma,index)=>{
          if(seletSQL.length >= 2 && seletSQL.length > index + 1 ){
            conselect += coma + 'SELECT\n     '
          }else{
            conselect += coma 
          }
      })
      let concoma = '';
      const comaSQL = conselect.split(',');
      comaSQL.map((coma,index)=>{
          if(comaSQL.length >= 2 && comaSQL.length > index + 1 ){
            concoma += coma + ',\n     '
          }else{
            concoma += coma 
          }
      })
      let conInsert = ''
      const InsertSQL = concoma.split('INSERT');
      InsertSQL.map((coma,index)=>{
        
          if(InsertSQL.length >= 2 && InsertSQL.length > index + 1 ){
            conInsert += coma + '\nINSERT\n     '
          }else{
            conInsert += coma 
          }
      })
      let conFrom = '';
      const FromSQL = conInsert.split('FROM');
      FromSQL.map((coma,index)=>{
        if(FromSQL.length >= 2 && FromSQL.length > index + 1) 
        {
          conFrom += coma + '\nFROM\n     '
        }else{
          conFrom += coma 
        }
      })
      let coninner = '';
      const InnerSQL = conFrom.split('INNER JOIN');
      InnerSQL.map((coma,index)=>{
        if(InnerSQL.length>= 2 && InnerSQL.length > index + 1 ) 
        {
          coninner += coma + '\nINNER JOIN\n     '
        }else{
          coninner += coma 
        }
      })
      const LeftSQL = coninner.split('LEFT JOIN');
      let conLeft = '';
      LeftSQL.map((coma,index)=>{
        if(LeftSQL.length >= 2 && InnerSQL.length > index + 1 ) 
        {
          conLeft += coma + '\nLEFT JOIN\n     '
        }else{
          conLeft += coma 
        }
      })
      const groupSQL = conLeft.split('GROUP BY');
      let congroup = '';
      groupSQL.map((coma,index)=>{
        if(groupSQL.length >= 2 && InnerSQL.length > index + 1 ) 
          {
          congroup += coma + '\nGROUP BY\n     '
          
        }else{
          congroup += coma 
        }
      })
      let conorder = '';
      const orderSQL = congroup.split('ORDER BY');
      orderSQL.map((coma,index)=>{
        if(orderSQL.length >= 2 && InnerSQL.length > index + 1 ) {
          conorder += coma + '\nORDER BY\n     '
          
        }else{
          conorder += coma 
        }
      })
      const havingSQL = conorder.split('HAVING');
      let conheaving = '';
       havingSQL.map((coma,index)=>{
        if(havingSQL.length >= 2 && InnerSQL.length > index + 1 ) {
          conheaving += coma + '\nHAVING\n     '
          
        }else{
          conheaving += coma 
        }
      })
      const whereSQL = conheaving.split('WHERE');
      let conWhere = '';
      whereSQL.map((coma,index)=>{
        if(whereSQL.length >= 2 && whereSQL.length > index + 1 ) {
          conWhere += coma + '\nWHERE\n     '
        
        }else{
          conWhere += coma 
        }
      })
      const andSQL = conWhere.split('AND');
      let conAnd = '';
      andSQL.map((coma,index)=>{
        if(andSQL.length >= 2 && andSQL.length > index + 1 ) {
          conAnd += coma + '\n     AND  '
        
        }else{
          conAnd += coma 
        }
      })
      setSql(conAnd)
    }
    await format()
  }

  const copySQL = async() => {
    const resolveAfter3Sec = navigator.clipboard.writeText(sql);
    toast.promise(
        resolveAfter3Sec,
        {
          pending: 'Copiando el SQL',
          success: 'Sql copiado👌',
          error: 'Se genero un erro al copiar el texto 🤯'
        },{position:"bottom-right",autoClose:1000}
    )

  };
  return (
    <section className="w-full h-full flex flex-col gap-2 p-2 text-slate-300">
      <h1 className="text-2xl font-bold ">Formateador Consulta SQL</h1>
      <form action="" onSubmit={handleClickSubmit} className="w-full h-full flex flex-col mt-10 gap-5">
        <label htmlFor="" className="text-lg font-bold">Ingrese la consulta sql</label>
        
        <textarea name="" id="" className="w-full h-full p-2 border-2 rounded-lg text-slate-300 bg-slate-700 caret-green-500"
        placeholder="Ingrese la consulta que desea formatear"
        style={{
          whiteSpace: 'pre-wrap',  // Utiliza el tamaño de fuente del entorno del navegador
        }}
         value={sql} 
         onChange={(e)=>setSql(e.target.value)} ></textarea>
        <div className="flex flex-row gap-3">
          <ButtonAnimation type="submit" text="Formatear" loading={false} icon={IconFormat}  />
          <ButtonAnimation type="button" text="Copy" loading={false} icon={IconCopy} onClick={()=>copySQL()}/>
        </div>
      </form>
    </section>
  )
};

export default FormateadorSqlLayout;
