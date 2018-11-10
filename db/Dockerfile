FROM mongo:latest

COPY ./courseData.json /courseData.json

CMD mongoimport --host db --port 5000 --db courseData --collection courses --file courseData.json