import { useForm } from "react-hook-form";

// Components
import Input from './components/Input'
import Button from './components/Button'

// Hooks
import usePdfGeneration from './hooks/usePdfGeneration'
import useUserManagement from './hooks/useUserManagement'

// Utils & misc
import { formConfig, formReasons } from './constants/formConfig'

// Style
import style from './App.module.css'

function App() {
  const { register, handleSubmit, reset } = useForm();
  const { getPdfUrl, downloadPdf } = usePdfGeneration()
  const { getUsers, getUserInfo, saveUser } = useUserManagement()

  const onSubmit = async (formData) => {
    const today = new Date()
    const datesortie = today.toLocaleString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' })
    const heuresortie = today.toLocaleTimeString('fr-FR')
    const pdfData = {
      ...formData,
      datesortie,
      heuresortie,
    }
    const pdf = await getPdfUrl(pdfData)

    saveUser(formData)
    downloadPdf(pdf, `attestation-${formData.firstname}-${datesortie}-${heuresortie}.pdf`)
  }

  const handleOnUserClick = (userIndex) => reset(getUserInfo(userIndex))

  return (
    <div className={style.main}>
      {getUsers().map((user, index) => (
        <button onClick={() => handleOnUserClick(index)}>{user.firstname}</button>
      ))}

      <form onSubmit={handleSubmit(onSubmit)}>
        {formConfig.map(field => (
          <Input key={field.name} ref={register} {...field} />
        ))}

        {formReasons.map(({ code, label }) => (
          <label key={code} htmlFor={code} style={{ display: 'block' }}>
            <input ref={register} type="radio" name="reason" id={code} value={code}/>
            {label}
          </label>
        ))}

        <Button color="primary" type="submit">Générer</Button>
      </form>
    </div>
  );
}

export default App;
