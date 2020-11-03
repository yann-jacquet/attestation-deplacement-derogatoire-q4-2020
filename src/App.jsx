import { useForm } from "react-hook-form";

// Components
import Input from './components/Input'
import Button from './components/Button'
import Radio from './components/Radio'
import PictoButton from './components/PictoButton'

// Hooks
import usePdfGeneration from './hooks/usePdfGeneration'
import useUserManagement from './hooks/useUserManagement'

// Utils & misc
import { formConfig, formReasons } from './constants/formConfig'

// Style
import style from './App.module.css'

function App() {
  const { register, handleSubmit, reset, watch, errors, formState } = useForm();
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

  const isUserActive = (user) => user.firstname === watch("firstname")

  return (
    <div className={style.main}>
      <div>
        {getUsers().length > 0
          ? getUsers().map((user, index) => (
            <PictoButton key={user.birthday} onClick={() => handleOnUserClick(index)} label={user.firstname} picto="user" isActive={isUserActive(user)}/>
          ))
          : null
        }
        <PictoButton onClick={() => handleOnUserClick(-1)} label="Nouveau" picto="userAdd" isActive={!getUsers().length}/>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        {formConfig.map(field => (
          <Input key={field.name} ref={register({ required: 'Ce champs est obligatoire' })} {...field} />
        ))}

        {formReasons.map(({ code, label }) => (
          <Radio key={code} label={label} ref={register} name="reason" id={code} value={code}/>
        ))}

        <Button color="primary" type="submit" disabled={!formState.isValid} >Générer</Button>
      </form>
    </div>
  );
}

export default App;
