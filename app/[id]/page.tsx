"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { httpService } from "../utility/httpService";
import ErrorMessage from "../Components/ErrorMessage";

export default function Page() {
  const params = useParams<{ id: string }>();
  const [error, setError] = useState<string | null>(null);
  const [isRedirected, setIsRedirected] = useState(false); 

  useEffect(() => {
    if (!params.id || params.id.length !== 8) {
      setError("URL does not exist");
      return;
    }

    const fetchUrlAndRedirect = async () => {
      try {
        const response = await httpService.get(`/${params.id}`);
        const originalUrl = response.data.originalUrl;

        if (originalUrl && !isRedirected) {
          setIsRedirected(true); 
          window.location.replace(originalUrl);
        }
      } catch (err) {
        console.log("Fetch error", err);
        setError( "An error occurred");
      }
    };

    fetchUrlAndRedirect();
  }, [params.id, isRedirected]);

  if (error) return <ErrorMessage message={error} />;
  return null; // Nothing renders if redirected
}
