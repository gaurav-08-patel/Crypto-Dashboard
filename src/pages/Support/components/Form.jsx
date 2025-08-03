import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const Form = () => {
    return (
        <form>
            <p className="text-sm font-medium max-xsm:text-xs">
                You will receive response within 24 hours of time of submit.
            </p>

            <div className="mt-6.5 flex gap-3.5 max-xsm:mt-4">
                <div className="grid w-full max-w-sm items-center gap-3 max-xsm:gap-2">
                    <Label htmlFor="name" className="max-xsm:text-xs">Name</Label>
                    <Input type="text" id="name" placeholder="Arthur" className="max-xsm:placeholder:text-xs max-xsm:text-xs" />
                </div>
                <div className="grid w-full max-w-sm items-center gap-3 max-xsm:gap-2">
                    <Label htmlFor="surname" className="max-xsm:text-xs">Surname</Label>
                    <Input type="text" id="surname" placeholder="Morgan"  className="max-xsm:placeholder:text-xs max-xsm:text-xs"/>
                </div>
            </div>
            <div className="grid w-full   items-center gap-3 mt-4">
                <Label htmlFor="email" className=" max-xsm:text-xs">Email</Label>
                <Input
                    type="email"
                    id="email"
                    placeholder="xyz@gmail.com"
                    className=" w-full max-xsm:placeholder:text-xs max-xsm:text-xs"
                />
            </div>
            <div className="grid w-full   items-center gap-3 mt-4">
                <Label htmlFor="message" className="max-xsm:text-xs">Message</Label>
                <textarea
                    type="email"
                    id="message"
                    placeholder="Your Message"
                    className="focus:outline-0 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] selection:bg-primary selection:text-primary-foreground text-sm resize-none shadow-xs rounded-md border-1 p-1.5 w-full h-30"
                />
            </div>
            <div className="flex items-center space-x-2 my-7">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="font-light text-sm max-xsm:text-xs">Accept <span className="text-[#5F00D9] ">   Terms & Conditions</span></Label>
            </div>

            <div className="flex flex-col gap-2" >
                <Button className="cursor-pointer max-xsm:text-xs">Send a Message</Button>
                <Button className="cursor-pointer max-xsm:text-xs">Book a Meeting</Button>
            </div>
        </form>
    );
};

export default Form;
