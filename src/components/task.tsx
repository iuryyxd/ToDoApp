import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui";
import { Trash } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { ITask } from "@/@types";

interface Task {
  id: string;
  taskName: string;
  isCompleted: boolean;
  onTaskChange: (task: ITask) => void;
  onDeleteTask: (id: string) => void;
}

export function Task({
  taskName,
  id,
  isCompleted,
  onDeleteTask,
  onTaskChange,
}: Task) {
  return (
    <Card className="w-full">
      <CardContent className="flex items-center justify-between py-4 px-4">
        <div className="flex items-center gap-3">
          <Checkbox
            checked={isCompleted}
            onCheckedChange={(checked) =>
              typeof checked === "boolean" &&
              onTaskChange({ id, taskName, isCompleted: checked })
            }
          />
          <p
            className={cn("text-gray-100 text-sm text-left", {
              "line-through text-gray-300": isCompleted,
            })}
          >
            {taskName}
          </p>
        </div>
        <button onClick={() => onDeleteTask(id)}>
          <Trash className="w-6 h-6 text-gray-300 hover:text-white transition-all" />
        </button>
      </CardContent>
    </Card>
  );
}
