import { z as zod } from "zod";
import type { SafeParseError } from "zod";

const firstErrorMessage = <T>(safeParseError: SafeParseError<T>, fallbackMessage: string) => safeParseError.error.errors.at(0)?.message ?? fallbackMessage;

export { firstErrorMessage };

export default zod;
