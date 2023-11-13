import React from "react";
import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function TaskHookForm({ kisiler, submitFn }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    defaultValues: {
      id: "", // TaskForm.js'te de bu şekilde verilmiş.
      title: "",
      description: "",
      people: [],
    },
    mode: "onChange",
  });

  // handleSubmit içerisindeki onSubmit / handleSubmit(mySubmit):

  function mySubmit(formData) {
    console.log("formData:", formData);
    toast.success("Task Eklendi! Hadi Göreve!!!");
    submitFn({
      ...formData,
      id: nanoid(5),
      status: "yapılacak",
    });
    reset();
  }
  return (
    <div>
      <form className="taskForm" onSubmit={handleSubmit(mySubmit)}>
        <div className="form-line">
          <label className="input-label" htmlFor="title">
            Başlık
          </label>
        </div>
      </form>
    </div>
  );
}
