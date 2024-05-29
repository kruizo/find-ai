import { useParams } from "react-router-dom";
function About() {
  const params = useParams<{ id: string }>();
  console.log(params);
  return (
    <>
      <div>About {params.id}</div>
    </>
  );
}

export default About;
