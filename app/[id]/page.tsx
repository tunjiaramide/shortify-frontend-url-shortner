"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { httpService } from "../utility/httpService";
import ErrorMessage from "../Components/ErrorMessage";

export default function Page() {
  const params = useParams<{ id: string }>();
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    if (!params.id || params.id.length !== 8) {
      setError("URL does not exist");
      return;
    }
    const fetchUrlAndRedirect = async () => {
      try {
        window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/${params.id}`;
      } catch (err) {
        console.log("Fetch error", err);
        setError( "An error occurred");
      }
    };
    fetchUrlAndRedirect();
  }, [params.id]);

  if (error) return <ErrorMessage message={error} />;
}
