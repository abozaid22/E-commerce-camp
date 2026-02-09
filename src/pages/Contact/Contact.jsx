
import Form from '../../Components/Form/Form';
import FormContact from '../../Components/FormContact/FormContact';
import GoogleMap from '../../Components/GoogleMap/GoogleMap';
import AboutTalk from './../../Components/AboutTalk/AboutTalk';

export default function Contact() {
  return (
    <div>
      <AboutTalk />
      <GoogleMap />
      <FormContact />
      <Form />

    </div>
  )
}

