import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { DevTool } from "@hookform/devtools";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Input } from "./ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Button } from "./ui/button";
import { PlusIcon, TrashIcon } from "@radix-ui/react-icons";
import { Checkbox } from "./ui/checkbox";

const schema = yup.object({
  questionTitle: yup.string().required("Please add a question"),
  questionType: yup.string().required("Please select a question type"),
  // correctAnswers: yup.array().min(1, "Please select a correct answer"),
  // description: yup.string(),
  options: yup.array().min(2, "Please add two or more options"),
});

const QuestionCreator = () => {
  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      questionTitle: "",
      questionType: "single-select-mcq",
      // correctAnswers: [],
      // description: null,
      options: [],
    },
  });

  const { fields, append, remove, update } = useFieldArray({
    name: "options",
    control: form.control,
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleOptionOnChecked = (id, checked) => {
    const currentType = form.getValues("questionType");

    if (currentType === "single-select-mcq") {
      form.setValue(
        "options",
        form.getValues("options").map((option) => ({
          ...option,
          isChecked: option.id === id,
        }))
      );
    } else if (currentType === "multi-select-mcq") {
      form.setValue(
        "options",
        form.getValues("options").map((option) => {
          if (option.id === id) {
            return {
              ...option,
              isChecked: checked,
            };
          } else return option;
        })
      );
    }
  };

  const handleAddOption = () => {
    append({
      id: form.getValues("options")?.length + 1,
      text: "",
      isChecked: false,
    });
  };

  const handleRemoveOption = (id) => {
    remove(id);
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="questionType"
            render={({ field }) => {
              return (
                <FormItem className="space-y-1 max-w-[600px] py-2">
                  <FormLabel>Choose a question type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-[200px] bg-indigo-600 text-gray-50 font-semibold border-indigo-400 focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500 py-5">
                        <SelectValue placeholder="Select a question type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="single-select-mcq">
                        Single correct
                      </SelectItem>
                      <SelectItem value="multi-select-mcq">
                        Multiple correct
                      </SelectItem>
                      <SelectItem value="short-long-question">
                        Short Long Question
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name="questionTitle"
            render={({ field }) => (
              <FormItem className="space-y-1 max-w-[600px] py-2">
                <FormLabel>Question</FormLabel>
                <FormControl>
                  <Input
                    className="focus-visible:ring-2 focus-visible:ring-indigo-500 py-4"
                    placeholder="For eg. What is the role of SQL in RDMS?"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {fields && (
            <FormField
              control={form.control}
              name="options"
              render={() => (
                <FormItem className="space-y-3 max-w-[600px] py-2">
                  <FormLabel>
                    Check the box to indicate a correct answer
                  </FormLabel>
                  {fields?.map((field, i) => {
                    return (
                      <div
                        className="flex items-center shadow-sm border rounded-md"
                        key={field.id}
                      >
                        <FormControl className="block ml-2">
                          <Checkbox
                            checked={field.isChecked}
                            onCheckedChange={(checked) => {
                              handleOptionOnChecked(i + 1, checked);
                            }}
                          />
                        </FormControl>
                        <FormControl className="block">
                          <Input
                            className="shadow-none border-none focus-visible:ring-transparent"
                            placeholder="For eg. What is the role of SQL in RDMS?"
                            {...form.register(`options.${i}.text`)}
                          />
                        </FormControl>
                        <Button
                          type="button"
                          variant="ghost"
                          className="rounded-none bg-red-500 hover:bg-red-500 rounded-e-md"
                          onClick={() => handleRemoveOption(field.id)}
                        >
                          <TrashIcon className="text-gray-100" />
                        </Button>
                      </div>
                    );
                  })}
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          <Button
            type="button"
            variant="ghost"
            className="flex items-center border-2 border-gray-500 border-dotted"
            onClick={handleAddOption}
          >
            <PlusIcon className="mr-1 h-4 w-4" />
            <p>Add an option</p>
          </Button>
          <Button
            className="capitalize bg-indigo-600 text-gray-50 font-medium hover:bg-indigo-700 mt-5"
            type="submit"
          >
            save
          </Button>
        </form>
      </Form>

      <DevTool control={form.control} />
    </div>
  );
};

export default QuestionCreator;
