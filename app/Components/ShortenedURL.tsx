"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { httpService } from "../utility/httpService";

const formSchema = z.object({
  linkurl: z.string().min(2, "URL must be at least 2 characters"),
});

type FormData = z.infer<typeof formSchema>;

interface ShortenedURLType {
  shortUrl: string;
}

interface ShortenedURLProps {
  urlShortened: (shortenedUrl: ShortenedURLType | null) => void;
}

export default function ShortenedURL({ urlShortened }: ShortenedURLProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { linkurl: "" },
  });

  const onSubmit: SubmitHandler<FormData> = async ({ linkurl }) => {
    try {
      const response = await httpService.post("/", { url: linkurl });
      urlShortened({ shortUrl: response.data.shortUrl });
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4 border rounded-md">
      <input
        id="linkurl"
        type="text"
        placeholder="Paste URL to be shortened here"
        {...register("linkurl")}
        className="w-full p-2 border rounded-md"
      />
      {errors.linkurl && <p className="text-red-500 text-sm">{errors.linkurl.message}</p>}

      <p className="text-gray-500 text-sm">
        Shortify is a free tool to shorten URLs and generate short links.
        It allows you to create a shortened link making it easy to share.
      </p>

      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
        Shorten URL
      </button>
    </form>
  );
}
