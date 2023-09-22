import { useQuery } from "@tanstack/vue-query";
import { supabase } from "../lib/supabaseClient";
import { DoubleImageEffect } from "@/lib/doubleImageEffect";

export const getProjects = () => {
  return useQuery(
    ["projects"],
    async () => {
      const { data } = await supabase.from("projects").select();
      return data;
    },
    {
      onSuccess: () => {
        setTimeout(() => {
          [...document.querySelectorAll(".double")].forEach(
            (el) => new DoubleImageEffect(el)
          );
        }, 200);
      },
    }
  );
};
