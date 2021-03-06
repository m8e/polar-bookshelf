import {DocDetail} from '../metadata/DocDetail';
import {notNull} from '../Preconditions';

export abstract class Viewer {

    public abstract start(): void;

    public abstract docDetail(): DocDetail | undefined;

    public changeScale(scale: number) {
        throw new Error("Not supported by this viewer.");
    }

    protected getFilename(): string {
        const url = new URL(window.location.href);
        return notNull(url.searchParams.get("filename"));
    }

}
