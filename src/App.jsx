import { useForm } from "react-hook-form";

// Components
import Input from './components/Input'

// Hooks
import usePdfGeneration from './hooks/usePdfGeneration'
import useUserManagement from './hooks/useUserManagement'

// Utils & misc
import { formConfig, formReasons } from './constants/formConfig'

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
    <div className="App">
      {getUsers().map((user, index) => (
        <button onClick={() => handleOnUserClick(index)}>{user.firstname}</button>
      ))}

      <form onSubmit={handleSubmit(onSubmit)}>
        {formConfig.map(field => (
          <Input key={field.name} ref={register} {...field} />
        ))}

        {formReasons.map(({ code, label }) => (
          <label key={code} htmlFor={code}>
            <input ref={register} type="radio" name="reason" id={code} value={code}/>
            {label}
          </label>
        ))}

        <button type="submit">Générer</button>
      </form>
    </div>
  );
}

export default App;
