"use client";

import { Fragment, useRef, useState, useTransition } from "react";
import { ArrowUpIcon, X } from "lucide-react";
import { askAIAboutMeAction } from "@/actions/askAi";

type Props = {
  setOpen: (open: boolean) => void;
};

function AskAIButton({ setOpen }: Props) {
  const [isPending, startTransition] = useTransition();
  const [questionText, setQuestionText] = useState("");
  const [questions, setQuestions] = useState<string[]>([]);
  const [responses, setResponses] = useState<string[]>([]);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleInput = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const handleSubmit = () => {
    if (!questionText.trim()) return;

    const newQuestions = [...questions, questionText];
    setQuestions(newQuestions);
    setQuestionText("");
    setTimeout(scrollToBottom, 100);

    startTransition(async () => {
      const response = await askAIAboutMeAction(newQuestions, responses);
      setResponses((prev) => [...prev, response]);
      setTimeout(scrollToBottom, 100);
    });
  };

  const scrollToBottom = () => {
    modalRef.current?.scrollTo({
      top: modalRef.current.scrollHeight,
      behavior: "smooth",
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 bg-opacity-50">
      <div
        ref={modalRef}
        className="flex h-[85vh] w-full max-w-4xl flex-col rounded-lg bg-white p-6 shadow-xl"
      >
        <div className="flex items-center justify-between">
          <div className="mb-4">
            <h2 className="text-xl font-bold">Ask AI About dev Dat</h2>
            <p className="text-gray-600">
              My AI can answer questions about all the information of dev Dat.
            </p>
          </div>
          <button onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>

        <div className="flex flex-1 flex-col gap-8 overflow-y-auto">
          {questions.map((question, index) => (
            <Fragment key={index}>
              <p className="ml-auto max-w-[60%] rounded-md bg-gray-100 px-4 py-2 text-sm text-gray-800">
                {question}
              </p>
              {responses[index] && (
                <p
                  className="bot-response text-sm text-gray-800"
                  dangerouslySetInnerHTML={{ __html: responses[index] }}
                />
              )}
            </Fragment>
          ))}
          {isPending && (
            <p className="animate-pulse text-sm text-gray-600">Thinking...</p>
          )}
        </div>

        <div className="mt-4 flex flex-col rounded-lg border p-4">
          <textarea
            ref={textareaRef}
            placeholder="ask dev Dat any questions you have about dev Dat..."
            className="min-h-[40px] w-full resize-none rounded-none border-none bg-transparent p-0 focus:outline-none"
            rows={1}
            onInput={handleInput}
            onKeyDown={handleKeyDown}
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            className="ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-white"
          >
            <ArrowUpIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AskAIButton;
