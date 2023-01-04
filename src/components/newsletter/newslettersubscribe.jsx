import MailchimpSubscribe from 'react-mailchimp-subscribe';
import NewsletterForm from './newsletterform';

const NewsletterSubscribe = () => {

  // const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL;

  return (
    <MailchimpSubscribe
      url='https://gmail.us13.list-manage.com/subscribe/post?u=d1b4eb1f1b746a180c19d88e0&amp;id=4122ddbfb8&amp;f_id=007e60e5f0'
      render={ ( props ) => {
        const { subscribe, status, message } = props || {};
        return (
          <NewsletterForm
            status={ status }
            message={ message }
            onValidated={formData => subscribe(formData)}
          />
        );
      } }
    />
  );
};

export default NewsletterSubscribe;