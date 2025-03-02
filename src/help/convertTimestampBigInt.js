export const convertTimestampBigInt = (seconds, nanoseconds) => {
    const milliseconds = Number(BigInt(seconds) * 1000n + BigInt(nanoseconds) / 1_000_000n);
    return new Date(milliseconds);
}