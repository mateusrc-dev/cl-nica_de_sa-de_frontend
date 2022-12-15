import { Container } from "./styles";
import { useState, useEffect } from "react";
import { api } from "../../services/api";

export function Notes({ id_professional }) {
  const [assessments, setAssessments] = useState([]);

  useEffect(() => {
    async function fetchAssessments() {
      const response = await api.get(`/assessments/?id_professional=${id_professional}`);
      setAssessments(response.data.testimony);
    }
    fetchAssessments();
  }, [assessments]);

  let sum = 0;
  let result = 0;


  for (var i = 0; i < assessments.length; i++) {
    sum = sum + assessments[i]["note"];
  }
  result = Number(sum) / Number(assessments.length);
  


  return (
    <Container>
      <span>{!result ? null : (result).toFixed(1)}</span>
    </Container>
  );
}
