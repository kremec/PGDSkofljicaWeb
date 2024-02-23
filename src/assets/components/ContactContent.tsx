import {Stack, Typography} from "@mui/material";

const HomeContent = () => {
  return (
      <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
      }}>
          <Stack spacing={1} sx={{width: '90vw'}} display={"flex"} paddingY={3}>
              <Typography variant="h3" textAlign={"center"}>
                  Kontakt
              </Typography>

              <Typography>
                  Spletna stran: <a href="https://www.pgd-skofljica.si">https://www.pgd-skofljica.si</a><br/>
                  E-pošta: <a href="mailto:pgdskofljica@siol.net">pgdskofljica@siol.net</a>
                  <br/><br/>
                  <br/><br/>
                  Predsednik:<br/>
                  Franc Kraškovic: <a href="tel:+386 31 628 200">+386 31 628 200</a>
                  <br/><br/>
                  Poveljnik:<br/>
                  Matic Trtnik: <a href="tel:+386 41 561 934">+386 41 561 934</a>
              </Typography>

              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2772.5229962566063!2d14.575417000000002!3d45.980786!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47652ec4634d8427%3A0x3b4f626ac7b29a!2sProstovoljno%20gasilsko%20dru%C5%A1tvo%20%C5%A0kofljica!5e0!3m2!1sen!2ssi!4v1708032647583!5m2!1sen!2ssi"
                  loading="lazy"
                  style={{width:"100%", aspectRatio:2}}
                  referrerPolicy="no-referrer-when-downgrade">
              </iframe>
          </Stack>
      </div>
  );
};

export default HomeContent;
