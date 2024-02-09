Build your Docker image:
Open your terminal or command prompt, navigate to the root directory of your project, and run the following command:

docker build -t exon-test .
This command builds a Docker image based on the instructions in your Dockerfile and tags it with the name exon-test.

Run your Docker container:
After the build is successful, you can run your Docker container:

You will need to add BASE_URL for the api endpoint and search_temm
docker run --rm -e BASE_URL="https://your-api-endpoint" -e SEARCH_TERM="keyword1" exon-test
