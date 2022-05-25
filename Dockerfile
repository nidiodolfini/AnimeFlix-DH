FROM httpd:2.4

LABEL maintainer="Nidio Dolfini"

EXPOSE 80

WORKDIR /usr/local/apache2/htdocs/

COPY /site /usr/local/apache2/htdocs/





#definição de imagem personalizada 

